var new_page=(title,)=>{
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>

  <!-- Top Bar with Right-Aligned Menu Link + Hamburger -->
  <div class="top-bar">
    <a href="/menu/" class="menu-link" title="Open Menu">
      <span class="menu-text">Menu</span>
      <img src="/assets/menu.png" alt="Menu">
    </a>
  </div>

  <div class="card-container">
    <!-- Header & Slogan Banner -->
    <div class="header-banner">
      <h1>Live Flight Deck Experience</h1>
      <p class="description">by hd configure</p>
    </div>

    <!-- Table: 1 Header, 1 Cell Below -->
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>CAN YOU TAKEOFF AND LAND A JETLINER?</th>
          </tr>
        </thead>
        <tbody>
        
          <tr>
            <td class="action-cell">
              <img src="/assets/flightdeck.jpg" alt="Flight Simulator">
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Paragraph Container Below Table -->
    <div class="info-block">
      <p>
        Experience high-definition immersive flight simulation designed with modern precision and realism. From full-cockpit displays to ultra-responsive controls, and experience the work of a commercial pilot.
      </p>
    </div>
    
     <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Where will your travels take you?</th>
        <tbody>
        
          <tr>
            <td class="action-cell">
              <img src="/assets/vista.jpg" alt="Flight Simulator">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
<div style="text-align: right; font-size: 11px; color: #888888; font-family: sans-serif;">
  Copyright Aug 13 2026 John Morris Beck and Theron Kauk. All rights reserved.
</div>





    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flight Deck Experience</title>
  <style>
    :root {
      --color-page-bg:       #0d0e11;
      --color-card-bg:       #13151a;
      --color-table-bg:      #1a1d24;
      --color-cell-bg:       #222630;
      --color-header-bg:     #111318;
      
      --color-border:        #2d323f;
      --color-text-main:     #ffffff;
      --color-text-muted:    #94a3b8;

      --color-btn-blue-bg:    #1e293b;
      --color-btn-blue-hover: #334155;
      --color-btn-blue-border:#3b82f6;

      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-lg: 16px;
      --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--color-page-bg);
      color: var(--color-text-main);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.6;
      padding: 0;
      min-height: 100vh;
    }

    /* Top Navigation Bar */
    .top-bar {
      background-color: var(--color-header-bg);
      border-bottom: 1px solid var(--color-border);
      padding: 0.75rem 1.5rem;
      display: flex;
      justify-content: flex-end; /* Aligns everything to the right */
      align-items: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }

    /* Right-aligned Navigation Link Group */
    .menu-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.6rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      border: 1px solid transparent;
      transition: var(--transition);
    }

    .menu-link:hover {
      background-color: var(--color-cell-bg);
      border-color: var(--color-border);
    }

    .menu-text {
      color: var(--color-text-main);
      font-weight: 600;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }

    .menu-link img {
      width: 22px;
      height: 22px;
      display: block;
      object-fit: contain;
    }

    /* Main Container */
    .card-container {
      background-color: var(--color-card-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2rem;
      max-width: 600px;
      margin: 2rem auto;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
    }

    /* Decorated Header Banner Box */
    .header-banner {
      background-color: var(--color-table-bg);
      border: 1px solid var(--color-border);
      border-left: 4px solid var(--color-btn-blue-border);
      border-radius: var(--radius-md);
      padding: 1.25rem 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }

    h1 { 
      color: var(--color-text-main); 
      font-size: 1.5rem; 
      margin-bottom: 0.25rem; 
      letter-spacing: -0.02em;
    }

    p.description { 
      color: var(--color-text-muted); 
      font-size: 0.9rem;
      font-style: italic;
      margin-bottom: 0; 
    }

    /* 1 TH & 1 Cell Table Layout */
    .table-wrapper {
      background-color: var(--color-table-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 8px;
    }

    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      color: var(--color-text-main);
    }

    th {
      background-color: var(--color-header-bg);
      color: var(--color-text-muted);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 600;
      padding: 0.85rem 1rem;
      border-radius: var(--radius-sm);
      text-align: center;
      margin-bottom: 6px;
      display: block;
    }

    td.action-cell {
      background-color: var(--color-cell-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      padding: 1rem;
      text-align: center;
      vertical-align: middle;
      display: block;
    }

    td a.table-btn {
      display: block;
      padding: 0.75rem 1.25rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-text-main);
      text-decoration: none;
      border-radius: var(--radius-sm);
      transition: var(--transition);
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    td a.table-btn-slate {
      background-color: var(--color-btn-blue-bg);
      border: 1px solid var(--color-btn-blue-border);
    }

    td a.table-btn-slate:hover {
      background-color: var(--color-btn-blue-hover);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
      transform: translateY(-1px);
    }

    td a.table-btn:active { transform: translateY(0); }
  </style>
</head>
<body>

  <!-- Top Bar with Right-Aligned Menu Link + Hamburger -->
  <div class="top-bar">
    <a href="/flightdeck/" class="menu-link" title="Open Menu">
      <span class="menu-text">Menu</span>
      <img src="/assets/menu.png" alt="Menu">
    </a>
  </div>

  <div class="card-container">
    <!-- Header & Slogan Banner -->
    <div class="header-banner">
      <h1>Flight Deck Experience</h1>
      <p class="description">CAN YOU TAKEOFF AND LAND A JETLINER?</p>
    </div>

    <!-- Table: 1 Header, 1 Cell Below -->
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>pages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="action-cell">
              <a href="/flightdeck/" class="table-btn table-btn-slate">homepage</a>
            </td>
          </tr>
          
          
                    <tr>
            <td class="action-cell">
              <a href="/flightdeck/" class="table-btn table-btn-slate">about</a>
            </td>
          </tr>
          
                    <tr>
            <td class="action-cell">
              <a href="/flightdeck/" class="table-btn table-btn-slate">contact</a>
            </td>
          </tr>
          
                    <tr>
            <td class="action-cell">
              <a href="/flightdeck/" class="table-btn table-btn-slate">directions</a>
            </td>
          </tr>
          
          

          
          
          
        </tbody>
      </table>
    </div>
  </div>




    
<div style="text-align: right; font-size: 11px; color: #888888; font-family: sans-serif;">
  Copyright Aug 13 2026 John Morris Beck and Theron Kauk. All rights reserved.
</div>

























</body>
</html>

    
    
    

  </div>

</body>
</html>
