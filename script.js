
      function testGlow() {
        const box = document.getElementById('demo-box');
        const text = document.getElementById('demo-text');
        const badge = document.getElementById('demo-badge');
        box.style.boxShadow = '0 0 30px #a855f7';
        box.style.borderColor = '#a855f7';
        text.innerText = '✨ Glow Effect Applied!';
        badge.innerText = 'Status: Active JS Box Shadow';
      }

      function testColor() {
        const box = document.getElementById('demo-box');
        const text = document.getElementById('demo-text');
        const badge = document.getElementById('demo-badge');
        box.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(236,72,153,0.3))';
        text.innerText = '🎨 Dynamic Gradient On!';
        badge.innerText = 'Status: Live Style Injection';
      }

      function testReset() {
        const box = document.getElementById('demo-box');
        const text = document.getElementById('demo-text');
        const badge = document.getElementById('demo-badge');
        box.style.boxShadow = 'none';
        box.style.background = 'rgba(0,0,0,0.4)';
        box.style.borderColor = 'var(--card-border)';
        text.innerText = 'Default State';
        badge.innerText = 'Status: Reset Successful';
      }
    