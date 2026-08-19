//copyright 2026 Theron Kauk and John Morris Beck - hd.configure.direct@gmail.com - all rights reserved

//todo:
//sanitize inputs to these functions with regex
//security risk level - high


//generates a new html page
//meant to be wrapped around other functions
var new_page=(license,title,style,body)=>{
  return `<!DOCTYPE html>
  <!--${license}-->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="/styles/${style}">
</head>
<body>${body}
</body>
</html>`;
}

var top_bar=()=>{return `
  <div class="top-bar">
    <a href="/menu/" class="menu-link" title="Open Menu">
      <span class="menu-text">Menu</span>
      <img src="/assets/menu.png" alt="Menu">
    </a>
  </div>`;
                }

  var header=(header_text,header_subtext)=>{return `
  <div class="card-container">
    <div class="header-banner">
      <h1>${header_text}</h1>
      <p class="description">${header_subtext}</p>
    </div>`;
                                           }


    var image=(image_header,image_path)=>{return `
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>${image_header}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="action-cell">
              <img src="${image_path}" alt="Flight Simulator">
            </td>
          </tr>
        </tbody>
      </table>
    </div>`;
                                         }

      var text_element=(text_value)=>{return `
    <div class="info-block">
      <p>
        ${text_value}
         </p>
    </div>`;
                                     }
    
var bottom_license=(license)=>{return `
<div style="text-align: right; font-size: 11px; color: #888888; font-family: sans-serif;">
 license
</div>`;
                              }




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
