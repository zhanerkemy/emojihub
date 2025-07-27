import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EmojiDetailPage = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const [emoji, setEmoji] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/emoji_with_descriptions.json')
      .then(response => response.json())
      .then(data => {
        const foundEmoji = data.find(e => e.name === decodedName);
        setEmoji(foundEmoji);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading emoji:', error);
        setLoading(false);
      });
  }, [decodedName]);

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading...</p>;
  }

  if (!emoji) {
    return <p style={{ textAlign: 'center' }}>Emoji not found.</p>;
  }

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      background: 'white', 
      padding: '30px', 
      borderRadius: '20px',
      textAlign: 'center'
    }}>
      <div 
        dangerouslySetInnerHTML={{ __html: emoji.htmlCode?.[0] || emoji.htmlCodes?.[0] || '' }} 
        style={{ fontSize: '80px' }} 
      />
      <h2 style={{ margin: '20px 0' }}>{emoji.name}</h2>
      <p><strong>Category:</strong> {emoji.category}</p>
      <p><strong>Group:</strong> {emoji.group || '—'}</p>
      <p><strong>Unicode:</strong> {emoji.unicode?.join(', ')}</p>
      <p style={{ marginTop: '20px', fontSize: '18px', color: '#646464' }}>
        {emoji.description || 'No description available.'}
      </p>
    </div>
  );
};

export default EmojiDetailPage;
