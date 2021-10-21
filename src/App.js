import { React } from 'react';
import './App.scss';
import "./images/sprite.svg";



const App = () => {

  return (
    <body>
      <header class="header shadow-sm p-3 mb-5 bg-body rounded" >

        <nav class="  navbar navbar-expand-xxl navbar-light  ">
          <div class="container-fluid">

            <a class="navbar-brand" href="/index.html" >
              <picture className="logo">
                <source media="(min-width: 1400px)" srcset="./images/logo-d.png"></source>
                <img src="./images/logo-m.png" alt="logo" />
              </picture>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav" >

                <li class="nav-item">
                  <a class="nav-link " href="/Über Uns">Über Uns</a>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Produkte
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="/Produkte 1">Produkte 1</a></li>
                      <li><a class="dropdown-item" href="/Produkte 2">Produkte 2</a></li>
                      <li><a class="dropdown-item" href="/Produkte 3">Produkte 3</a></li>
                    </ul>
                  </div>
                </li>



                <li class="nav-item">
                  <div class="dropdown">
                    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Peripherietechnik
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="/Peripherietechnik 1">Peripherietechnik 1</a></li>
                      <li><a class="dropdown-item" href="/Peripherietechnik 2">Peripherietechnik 2</a></li>
                    </ul>
                  </div>
                </li>

                <li class="nav-item">
                  <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Dienstleistungen
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="/Dienstleistungen 1">Dienstleistungen 1</a></li>
                      <li><a class="dropdown-item" href="/Dienstleistungen 2">Dienstleistungen 2</a></li>
                    </ul>
                  </div>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/Klimatechnik">Klimatechnik</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Kontakt">Kontakt</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Presse">Presse</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>

      <section className="presentation">
        <div className="presentation-text-d">
          <h1 class="h1">
            Luftkondensierte<br />
            Kältemaschinen<br />
            & Kaltwassersätze<br />
          </h1>
          <div className="decoration-line"></div>
          <div className="decoration-line-d"></div>
          <div class="presentation-img-1-m"></div>
          <p className="text">Aufgrund der kompakten Bauart
            werden platzsparende luftkondensierte Kompressionskältemaschinen
            (umgangsspr.„Kaltwassersätze“)
            vielseitig zur Prozesskühlung und Gebäudeklimatisierung eingesetzt.
          </p>
          <div className="decoration-line-d"></div>
        </div>

        <div className="presentation-img-1-d"></div>
      </section>

      <section className="energy-efficiency">
        <div className="energy-efficiency-img"></div>
        <div className="energy-efficiency-text-d">
          <h2 className="h2">ENERGIEEFFIZIENZ IM <br className="br"></br>FOKUS</h2>
          <p>
            Bei der Anschaffung sollte deshalb besonders auf <span>energieeffiziente Systeme</span> geachtet werden, denn die Betriebskosten der Anlage überschreiten erfahrungsgemäß über die Lebensdauer hinweg die einmaligen
            Anschaffungskosten um ein vielfaches.
            Insofern sind die Themen Kompressortechnik und Einsatz von Freikühlung von besonderer Bedeutung, sowie Steuer- und Regelungstechnik besonders wichtig.
          </p>
        </div>
      </section>

      <section className="standards">
        <div class="standards-img-1"></div>
        <div className="standards-div ">
          <div className="standards-text">
            <h2>MODERNSTE STANDARDS</h2>
            <p>Aktuelle Richtlinien und Verordnungen bezüglich des <span>Kältemittel Phase-Downs</span>  müssen berücksichtigt werden.
              Der langfristige Einsatz des Kältemittels muss sowohl nach ökonomischen als auch strategischen
              Gesichtspunkten entschieden werden.
              Alle unsere Kältemaschinen entsprechen dem modernsten Stand
              der Technik und werden in den unterschiedlichsten Branchen eingesetzt.
              Unser Angebot umfasst ein <span>breites Sortiment an natürlichen und frigenen Kältemitteln</span>,
              die den aktuellsten Normen und Verordnungen entsprechen.
            </p>
          </div>
        </div>
      </section>

      <section className="speciality">
        <div className="lines-container">
          <div className="lines"></div>
        </div>
        <div>
          <h2>Unsere Spezialität besteht aus<br></br> unseren Kaltwassersätzen mit<br></br> integrierter Freikühleinheit.</h2>
          <p>Doppelkanal Mikrochannel Wärmetauscher kühlen das Prozesswasser energiesparend über ambiente Umgebungsluft.
            <br></br>
            <br></br>
            <span>Nur bei heißen Außentemperaturen erfolgt die Umschaltung auf Kompressionskälteerzeugung.
              Diese Maximierung der Freikühlzeit erzielt größtmögliche Kosteneinsparungen</span> auch bei kleinen Nennleistungen.</p>
        </div>
      </section>

      <section className="advantages">
        <div className="contant-container">
          <h2 className="h2">IHRE VORTEILE</h2>

          <ul className="advantages-list list" >

            {/* <li className="item">
              <div className="icon">
                <svg width="20" height="20">
                  <use href="./images/sprite.svg#icon-1"></use>
                </svg>
              </div>
              <p>Mit und ohne integrierter Freikühlung</p>
            </li> */}



            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 40 32" width="49" height="56">
                  <path stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="0.8205" d="M14.724 0.821c0-0.227-0.184-0.41-0.41-0.41h-13.493c-0.227 0-0.41 0.184-0.41 0.41v8.096c0 0.227 0.184 0.41 0.41 0.41h2.699c0.227 0 0.41-0.184 0.41-0.41v-4.987h10.384c0.227 0 0.41-0.184 0.41-0.41v-2.699z"></path>
                  <path stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="0.8205" d="M25.108 0.41c-0.227 0-0.41 0.184-0.41 0.41v2.699c0 0.227 0.184 0.41 0.41 0.41h10.384v4.987c0 0.227 0.184 0.41 0.41 0.41h2.699c0.227 0 0.41-0.184 0.41-0.41v-8.096c0-0.227-0.184-0.41-0.41-0.41h-13.493z"></path>
                  <path stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="0.8205" d="M14.313 31.59c0.227 0 0.41-0.184 0.41-0.41v-2.698c0-0.227-0.184-0.41-0.41-0.41h-10.384v-4.987c0-0.227-0.184-0.41-0.41-0.41h-2.699c-0.227 0-0.41 0.184-0.41 0.41v8.096c0 0.227 0.184 0.41 0.41 0.41h13.493z"></path>
                  <path stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="0.8205" d="M24.697 31.179c0 0.227 0.184 0.41 0.41 0.41h13.493c0.227 0 0.41-0.184 0.41-0.41v-8.096c0-0.227-0.184-0.41-0.41-0.41h-2.699c-0.227 0-0.41 0.184-0.41 0.41v4.987h-10.384c-0.227 0-0.41 0.184-0.41 0.41v2.698z"></path>
                </svg>
              </div>
              <p>Geringe Stellfläche</p>
            </li>

            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 29 32" width="49" height="56">
                  <path d="M27.621 22.2l-2.46-1.438 2.14-0.581c0.527-0.144 0.841-0.694 0.697-1.225l-0.257-0.969c-0.138-0.531-0.684-0.85-1.211-0.706l-5.002 1.356-4.506-2.637 4.512-2.637 5.002 1.356c0.527 0.144 1.067-0.175 1.211-0.706l0.257-0.969c0.138-0.531-0.169-1.081-0.697-1.225l-2.14-0.581 2.46-1.438c0.471-0.275 0.634-0.887 0.364-1.369l-0.496-0.869c-0.27-0.481-0.879-0.644-1.349-0.369l-2.46 1.438 0.571-2.169c0.138-0.531-0.169-1.081-0.697-1.225l-0.954-0.256c-0.527-0.144-1.067 0.175-1.211 0.706l-1.337 5.062-4.512 2.637v-5.281l3.659-3.706c0.383-0.388 0.383-1.025 0-1.413l-0.697-0.706c-0.383-0.387-1.010-0.387-1.393 0l-1.563 1.587v-2.869c0-0.55-0.439-1-0.985-1h-0.985c-0.546 0-0.985 0.45-0.985 1v2.881l-1.563-1.587c-0.383-0.387-1.010-0.387-1.393 0l-0.722 0.706c-0.383 0.388-0.383 1.025 0 1.412l3.659 3.706v5.281l-4.512-2.637-1.337-5.063c-0.138-0.531-0.684-0.85-1.211-0.706l-0.954 0.256c-0.527 0.144-0.841 0.694-0.697 1.225l0.571 2.169-2.46-1.438c-0.471-0.275-1.073-0.112-1.349 0.369l-0.496 0.869c-0.27 0.481-0.113 1.088 0.364 1.369l2.46 1.438-2.14 0.569c-0.527 0.144-0.841 0.694-0.697 1.225l0.257 0.969c0.138 0.531 0.684 0.85 1.211 0.706l5.002-1.356 4.512 2.638-4.512 2.637-5.002-1.356c-0.527-0.144-1.067 0.175-1.211 0.706l-0.257 0.969c-0.138 0.531 0.169 1.081 0.697 1.225l2.14 0.581-2.46 1.438c-0.471 0.275-0.634 0.887-0.364 1.369l0.496 0.869c0.27 0.481 0.879 0.644 1.349 0.369l2.46-1.438-0.571 2.169c-0.138 0.531 0.169 1.081 0.697 1.225l0.954 0.256c0.527 0.144 1.067-0.175 1.211-0.706l1.337-5.063 4.512-2.637v5.281l-3.659 3.706c-0.383 0.387-0.383 1.025 0 1.413l0.697 0.706c0.383 0.387 1.010 0.387 1.393 0l1.563-1.587v2.869c0 0.55 0.439 1 0.985 1h0.985c0.546 0 0.985-0.45 0.985-1v-2.881l1.563 1.587c0.383 0.388 1.010 0.388 1.393 0l0.697-0.706c0.383-0.387 0.383-1.025 0-1.413l-3.659-3.706v-5.281l4.512 2.637 1.337 5.063c0.138 0.531 0.684 0.85 1.211 0.706l0.954-0.256c0.527-0.144 0.841-0.694 0.697-1.225l-0.571-2.169 2.46 1.438c0.471 0.275 1.073 0.112 1.349-0.369l0.496-0.869c0.289-0.469 0.132-1.081-0.345-1.356z"></path>
                </svg>
              </div>
              <p>Mit und ohne integrierter Freikühlung</p>
            </li>


            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 31 32" width="49" height="56">
                  <path d="M15.72 9.825c-3.248 0-5.895 2.647-5.895 5.895s2.647 5.895 5.895 5.895c3.248 0 5.895-2.647 5.895-5.895s-2.647-5.895-5.895-5.895zM30.851 14.768l-5.815-2.905 2.057-6.165c0.276-0.835-0.516-1.627-1.345-1.345l-6.165 2.057-2.911-5.821c-0.393-0.786-1.511-0.786-1.904 0l-2.905 5.815-6.171-2.057c-0.835-0.276-1.627 0.516-1.345 1.345l2.057 6.165-5.815 2.911c-0.786 0.393-0.786 1.511 0 1.904l5.815 2.904-2.057 6.171c-0.276 0.835 0.516 1.627 1.345 1.345l6.165-2.057 2.905 5.815c0.393 0.786 1.511 0.786 1.904 0l2.905-5.815 6.165 2.057c0.835 0.276 1.627-0.516 1.345-1.345l-2.057-6.165 5.815-2.905c0.798-0.399 0.798-1.517 0.012-1.91zM21.277 21.277c-3.064 3.064-8.050 3.064-11.115 0s-3.064-8.050 0-11.115c3.064-3.064 8.050-3.064 11.115 0s3.064 8.050 0 11.115z"></path>
                </svg>
              </div>
              <p>Für Außentemperaturen bis +55°C</p></li>

            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 54 32" width="49" height="56">
                  <path d="M43.974 5.573c-0.075-0.112-0.176-0.204-0.294-0.267s-0.251-0.097-0.386-0.097c-0.135 0-0.267 0.033-0.386 0.097s-0.22 0.155-0.294 0.267l-4.903 7.354c-0.082 0.123-0.129 0.266-0.136 0.414s0.026 0.294 0.096 0.425c0.070 0.13 0.174 0.239 0.3 0.315s0.272 0.116 0.42 0.116h0.16l-3.304 5.287c-0.077 0.124-0.12 0.266-0.124 0.412s0.031 0.29 0.102 0.418 0.174 0.234 0.3 0.308c0.126 0.074 0.269 0.113 0.415 0.113h0.312l-2.677 5.354c-0.062 0.125-0.092 0.263-0.086 0.402s0.048 0.275 0.121 0.393c0.073 0.119 0.176 0.216 0.297 0.284s0.259 0.104 0.398 0.104h7.354v4.086h3.268v-4.086h7.354c0.139 0 0.276-0.036 0.398-0.104s0.224-0.166 0.297-0.284c0.073-0.119 0.115-0.254 0.121-0.393s-0.023-0.278-0.086-0.402l-2.675-5.354h0.312c0.146 0 0.289-0.039 0.415-0.113s0.229-0.18 0.3-0.308c0.071-0.128 0.106-0.272 0.102-0.418s-0.047-0.288-0.124-0.412l-3.306-5.287h0.16c0.148-0 0.293-0.040 0.42-0.116s0.231-0.185 0.3-0.315c0.070-0.13 0.103-0.277 0.096-0.425s-0.054-0.291-0.136-0.414l-4.903-7.354z"></path>
                  <path d="M29.767 14.067v14.653c-0 0.46-0.122 0.91-0.353 1.305s-0.561 0.718-0.957 0.936c-0.358 0.198-0.76 0.3-1.168 0.294h-7.451c-0.329 0-0.644-0.134-0.877-0.371s-0.363-0.56-0.363-0.897v-7.608c0-0.336-0.131-0.659-0.363-0.897s-0.548-0.371-0.877-0.371h-4.961c-0.329 0-0.644 0.134-0.877 0.371s-0.363 0.56-0.363 0.897v7.608c0 0.336-0.131 0.659-0.363 0.897s-0.548 0.371-0.877 0.371h-7.436c-0.352 0.001-0.699-0.075-1.020-0.223s-0.607-0.364-0.839-0.634c-0.408-0.482-0.629-1.1-0.622-1.737v-14.595c0-0.353 0.073-0.703 0.212-1.026s0.344-0.613 0.6-0.851l12.402-11.527c0.456-0.427 1.051-0.663 1.669-0.663s1.213 0.236 1.669 0.663l12.404 11.527c0.255 0.238 0.46 0.528 0.599 0.851s0.212 0.672 0.212 1.026z"></path>
                </svg>
              </div>
              <p>Für Außen- und Innenaufstellung erhältlich</p></li>

            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 44 32" width="49" height="56">
                  <path d="M33.719 28.656c1.646 0 2.975-1.324 2.975-2.964s-1.329-2.964-2.975-2.964c-1.646 0-2.975 1.324-2.975 2.964s1.329 2.964 2.975 2.964zM36.694 10.87h-4.959v4.941h8.846l-3.888-4.941zM9.917 28.656c1.646 0 2.975-1.324 2.975-2.964s-1.329-2.964-2.975-2.964c-1.646 0-2.975 1.324-2.975 2.964s1.329 2.964 2.975 2.964zM37.686 7.905l5.95 7.905v9.881h-3.967c0 3.281-2.658 5.929-5.95 5.929s-5.95-2.648-5.95-5.929h-11.901c0 3.281-2.658 5.929-5.95 5.929s-5.95-2.648-5.95-5.929h-3.967v-21.739c0-2.194 1.765-3.953 3.967-3.953h27.769v7.905h5.95zM3.967 3.953v17.787h1.507c1.091-1.206 2.678-1.976 4.443-1.976s3.352 0.771 4.443 1.976h13.408v-17.787h-23.802zM7.934 12.846l2.975-2.964 2.975 2.964 6.942-6.917 2.975 2.964-9.917 9.881-5.95-5.929z"></path>
                </svg>
              </div>
              <p>Betriebsbereit bei Anlieferung</p></li>

            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 31 32" width="49" height="56">
                  <path d="M10.868 5c-3.269 0-5.928 2.691-5.928 6 0 0.553 0.442 1 0.988 1s0.988-0.448 0.988-1c0-2.206 1.773-4 3.952-4 0.546 0 0.988-0.448 0.988-1s-0.442-1-0.988-1zM5.932 28.699c0 0.197 0.057 0.389 0.166 0.552l1.513 2.303c0.183 0.279 0.492 0.446 0.823 0.446h4.869c0.331 0 0.64-0.168 0.823-0.446l1.513-2.303c0.107-0.164 0.165-0.356 0.166-0.552l0.003-2.699h-9.877l0.002 2.699zM10.868 0c-6.316 0-10.868 5.186-10.868 11 0 2.773 1.016 5.303 2.69 7.236 1.028 1.187 2.639 3.675 3.237 5.76v0.004h2.964v-0.008c-0.001-0.298-0.044-0.594-0.133-0.879-0.345-1.113-1.409-4.048-3.839-6.855-1.268-1.464-1.946-3.322-1.952-5.259-0.012-4.603 3.685-8 7.901-8 4.358 0 7.904 3.589 7.904 8 0 1.936-0.694 3.803-1.954 5.259-2.415 2.788-3.484 5.717-3.835 6.841-0.091 0.289-0.137 0.59-0.137 0.894v0.006h2.964v-0.003c0.598-2.086 2.209-4.574 3.237-5.76 1.673-1.934 2.689-4.464 2.689-7.237 0-6.075-4.866-11-10.868-11z"></path>
                  <path d="M30.136 16.508c-0.123-0.265-0.475-0.276-0.623-0.025-0.682 1.144-1.904 1.857-3.3 1.857h-1.761c-2.334 0-4.227 1.825-4.227 4.075 0 0.149 0.018 0.291 0.033 0.435 1.404-0.97 3.432-1.793 6.307-1.793 0.194 0 0.352 0.153 0.352 0.34s-0.159 0.34-0.352 0.34c-5.535 0-7.881 3.271-8.401 4.499-0.145 0.346 0.026 0.741 0.385 0.883 0.361 0.144 0.77-0.023 0.92-0.367 0.033-0.076 0.46-1.017 1.583-1.923 0.713 0.932 2.069 1.821 3.85 1.638 3.456-0.242 5.889-3.23 5.889-6.889 0-1.065-0.238-2.169-0.656-3.069z"></path>
                </svg>
              </div>
              <p>Automatische Freikühlschaltung für verringerten Energieverbrauch</p>
            </li>

            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 32 32" width="49" height="56">
                  <path d="M22.4 11.2h4.8l-8 11.2 3.2-11.2zM12.8 11.2h6.4l-3.2 12.8-3.2-12.8zM4.8 11.2h4.8l3.2 11.2-8-11.2zM20.8 3.2h3.2l3.2 4.8h-4.8l-1.6-4.8zM14.4 3.2h3.2l1.6 4.8h-6.4l1.6-4.8zM8 3.2h3.2l-1.6 4.8h-4.8l3.2-4.8zM6.4 0l-6.4 9.6 16 22.4 16-22.4-6.4-9.6h-19.2z"></path>
                  <path d="M30.136 16.508c-0.123-0.265-0.475-0.276-0.623-0.025-0.682 1.144-1.904 1.857-3.3 1.857h-1.761c-2.334 0-4.227 1.825-4.227 4.075 0 0.149 0.018 0.291 0.033 0.435 1.404-0.97 3.432-1.793 6.307-1.793 0.194 0 0.352 0.153 0.352 0.34s-0.159 0.34-0.352 0.34c-5.535 0-7.881 3.271-8.401 4.499-0.145 0.346 0.026 0.741 0.385 0.883 0.361 0.144 0.77-0.023 0.92-0.367 0.033-0.076 0.46-1.017 1.583-1.923 0.713 0.932 2.069 1.821 3.85 1.638 3.456-0.242 5.889-3.23 5.889-6.889 0-1.065-0.238-2.169-0.656-3.069z"></path>
                </svg>
              </div>
              <p>Robustes Gehäuse für Außenaufstellung</p></li>

            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 42 32" width="49" height="56">
                  <path d="M17.502 0.587l-7.242 7.413h-8.307c-1.079 0-1.953 0.895-1.953 2v12c0 1.104 0.874 2 1.953 2h8.307l7.242 7.413c1.223 1.252 3.335 0.372 3.335-1.414v-27.997c0-1.788-2.113-2.665-3.335-1.414zM37.575 16l3.715-3.803c0.513-0.525 0.513-1.377 0-1.902l-1.857-1.902c-0.513-0.525-1.345-0.525-1.857 0l-3.715 3.803-3.715-3.803c-0.513-0.525-1.345-0.525-1.857 0l-1.857 1.902c-0.513 0.525-0.513 1.377 0 1.902l3.715 3.803-3.714 3.803c-0.513 0.525-0.513 1.377 0 1.902l1.857 1.902c0.513 0.525 1.345 0.525 1.857 0l3.714-3.803 3.715 3.803c0.513 0.525 1.345 0.525 1.857 0l1.857-1.902c0.513-0.525 0.513-1.377 0-1.902l-3.715-3.803z"></path>
                </svg>
              </div>
              <p>Geringe Schallemissionen</p>
            </li>

            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 31 32" width="49" height="56">
                  <path d="M17.309 28.329c0.417 0 0.818 0.166 1.113 0.461s0.461 0.695 0.461 1.113c0 0.417-0.166 0.818-0.461 1.113s-0.695 0.461-1.113 0.461c-0.417 0-0.818-0.166-1.113-0.461s-0.461-0.695-0.461-1.113c0-0.417 0.166-0.818 0.461-1.113s0.695-0.461 1.113-0.461zM11.801 26.755c0.417 0 0.818 0.166 1.113 0.461s0.461 0.695 0.461 1.113c0 0.417-0.166 0.818-0.461 1.113s-0.695 0.461-1.113 0.461-0.818-0.166-1.113-0.461c-0.295-0.295-0.461-0.695-0.461-1.113s0.166-0.818 0.461-1.113c0.295-0.295 0.695-0.461 1.113-0.461zM22.818 26.755c0.417 0 0.818 0.166 1.113 0.461s0.461 0.695 0.461 1.113c0 0.417-0.166 0.818-0.461 1.113s-0.695 0.461-1.113 0.461-0.818-0.166-1.113-0.461c-0.295-0.295-0.461-0.695-0.461-1.113s0.166-0.818 0.461-1.113c0.295-0.295 0.695-0.461 1.113-0.461zM17.312 6.31c4.986 0 7.816 3.3 8.226 7.287h0.126c0.762-0.001 1.517 0.148 2.222 0.439s1.345 0.717 1.884 1.256 0.968 1.178 1.26 1.881c0.292 0.704 0.443 1.458 0.444 2.221-0.001 0.762-0.152 1.516-0.445 2.22s-0.721 1.343-1.26 1.881c-0.54 0.538-1.18 0.965-1.884 1.255s-1.459 0.44-2.221 0.439h-16.706c-0.762 0.001-1.517-0.148-2.221-0.439s-1.345-0.717-1.884-1.255c-0.54-0.538-0.968-1.177-1.26-1.881s-0.444-1.458-0.445-2.22c0.001-0.762 0.152-1.517 0.444-2.221s0.721-1.343 1.26-1.881 1.18-0.965 1.884-1.256c0.705-0.291 1.459-0.44 2.222-0.439h0.126c0.414-4.013 3.242-7.287 8.228-7.287zM3.722 12.849c0.109 0.264 0.12 0.558 0.029 0.828s-0.277 0.499-0.523 0.643l-0.145 0.071-1.457 0.604c-0.276 0.113-0.584 0.116-0.863 0.011s-0.507-0.312-0.64-0.579-0.159-0.574-0.074-0.86c0.085-0.286 0.274-0.529 0.531-0.681l0.143-0.072 1.457-0.604c0.143-0.059 0.297-0.090 0.452-0.090s0.309 0.031 0.452 0.090c0.143 0.059 0.273 0.146 0.383 0.256s0.197 0.24 0.256 0.383zM13.932 5.243l-0.269 0.091c-2.809 0.992-4.821 3.156-5.689 6.017l-0.112 0.393-0.091 0.375-0.324 0.061c-0.942 0.198-1.835 0.58-2.628 1.124-0.721-1.24-0.991-2.691-0.762-4.107s0.94-2.709 2.015-3.66c1.074-0.95 2.445-1.499 3.878-1.553s2.841 0.391 3.984 1.258zM1.478 5.291l0.165 0.055 1.457 0.604c0.273 0.115 0.493 0.329 0.616 0.599s0.139 0.576 0.047 0.858c-0.093 0.282-0.288 0.518-0.548 0.662s-0.563 0.185-0.852 0.115l-0.167-0.053-1.457-0.604c-0.274-0.115-0.495-0.329-0.618-0.599s-0.14-0.577-0.047-0.859c0.093-0.282 0.289-0.519 0.549-0.663s0.565-0.184 0.853-0.113v-0.002zM7.482 0.592l0.071 0.143 0.604 1.457c0.114 0.276 0.119 0.585 0.014 0.865s-0.312 0.509-0.58 0.642c-0.268 0.133-0.576 0.16-0.862 0.074s-0.53-0.276-0.681-0.534l-0.072-0.145-0.604-1.457c-0.112-0.276-0.116-0.584-0.011-0.863s0.312-0.507 0.579-0.64 0.574-0.159 0.86-0.074c0.286 0.085 0.529 0.274 0.681 0.531h0.002zM14.333 0.090c0.261 0.108 0.475 0.307 0.602 0.56s0.159 0.543 0.090 0.817l-0.053 0.165-0.604 1.457c-0.115 0.273-0.329 0.493-0.599 0.616s-0.576 0.139-0.858 0.047c-0.282-0.093-0.518-0.288-0.662-0.548s-0.185-0.563-0.115-0.852l0.055-0.167 0.603-1.457c0.059-0.143 0.146-0.273 0.256-0.383s0.24-0.197 0.383-0.256c0.143-0.059 0.297-0.090 0.452-0.090s0.309 0.031 0.452 0.090z"></path>
                </svg>
              </div>
              <p>Wetterfest und Langlebig</p>
            </li>

            <li className="item">
              <div className="icon">
                <svg viewBox="0 0 30 32" width="49" height="56">
                  <path d="M27.888 5.23l-11.886-5c-0.362-0.152-0.75-0.23-1.142-0.23s-0.78 0.078-1.142 0.23l-11.886 5c-1.108 0.463-1.832 1.556-1.832 2.769 0 12.407 7.088 20.983 13.712 23.771 0.73 0.306 1.554 0.306 2.284 0 5.305-2.232 13.718-9.938 13.718-23.771 0-1.213-0.724-2.306-1.826-2.769zM14.863 27.895l-0.006-23.815 10.889 4.582c-0.204 9.463-5.082 16.32-10.883 19.233z"></path>
                </svg>
              </div>
              <p>Erhöhte Betriebssicherheit</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="features">
        <div>
          <h2>HAUPTMERKMALE</h2>
          <ul>
            <li class="item">
              <div>1</div><p>25 verschiedene Modelle von <span>6 kW bis 600 kW</span> Kühlleistung</p>
            </li>
            <li class="item">
              <div>2</div><p>Volumenströme von <span>1,5 m³/h bis 140 m³/h</span></p>
            </li>
            <li class="item">
              <div>3</div><p>Auswahl aus <span>50 verschiedenen Prozesspumpen</span> im Hochfluss- und Hochdruckbereich</p>
            </li>
            <li class="item">
              <div>4</div><p>Kompakteinheiten mit <span>integrierten Pumpen, Drucktanks, Filtern,Steuerungen</span> (optional mit Reservepumpe)</p>
            </li>
            <li class="item">
              <div>5</div><p><span>Mikrochannel Verflüssiger</span> für höchste Energieeffizienz</p>
            </li>
            <li class="item">
              <div>6</div><p>Mit optionalen <span>Kompressor Schallschutzummantelungenz</span></p>
            </li>
            <li class="item">
              <div>7</div><p><span>Schallmindernde Ventilatortechnik</span> erhältlich</p>
            </li>
            <li class="item">
              <div>8</div><p><span>Scroll, Multiscroll und Schraubenkompressoren </span>(optional mit Frequenzumrichter)erhältlich </p>
            </li>
            <li class="item">
              <div>9</div><p><span>Automatische Leistungssteuerung</span> für Prozesse mit variabler Kühllast</p>
            </li>
            <li class="item">
              <div>10</div><p><span>Kleine Kältemittelvolumen</span> dank extrakompakter Bauweise</p>
            </li>
            <li class="item">
              <div>11</div><p>Auswahl aus <span>verschiedenen Low-GWP Kältemitteln, u.a.R513a, R1234ze und R290 (Propan)</span></p>
            </li>
            <li class="item">
              <div>12</div><p>Mit <span>automatischen Glykol Nachfüllsystemem</span></p>
            </li>
            <li class="item">
              <div>13</div><p>Mit <span>Remote HMI</span></p>
            </li>
            <li class="item">
              <div>14</div><p><span>Erhöhte Betriebssicherheit mit bis zu 4 Kühlkreisläufen</span> pro Maschine</p>
            </li>

          </ul>
        </div>
      </section>

      <section className="photos">
        <h2>BILDER</h2>
        {/* <div class="photos-img-1"></div> */}

        <div id="carouselExampleCaptions" class="carousel  slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <div class="photos-img-1"></div>
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div class="photos-img-1"></div>
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              <div class="photos-img-1"></div>
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technologies">
        <h2>BESUCHER DIESER SEITE<br></br> SUCHTEN AUCH OFT<br></br> NACH:</h2>
        <ul >
          <li>GLYKOLWANNEN</li>
          <li>WASSERAUFBEREITUNG</li>
          <li>ROHRLEITUNGSBAU</li>
          <li>WÄRMEMENGENMESSUNGEN</li>
          <li>ANLAGELEASING</li>
        </ul>
      </section>

      <section className="apointment">
        <div className="logo-gray"></div>
        <h2>Jetzt Termin vereinbaren!</h2>
        <div className="apointment-div-d">
          <p>Gerne stehen wir Ihnen für eine individuelle Beratung telefonisch
            und vor Ort zur
            Verfügung und freuen
            uns über Ihre Kontaktaufnahme. Sprechen Sie uns an!<br></br><br></br>
            Fragen Sie nach einem Rückruf oder kontaktieren Sie uns unter:
            <a class=" mail" href="mailto:info@elsasser-technik.de">info@elsasser-technik.de</a>
          </p>
          <div className="kontakt">Kontakt</div>
        </div>
      </section>
      <div className="apointment-border"></div>
      <footer class="footer">
        <adress>
          <ul class="adress">
            <li class="footer-item">
              <p class="adress-title">Elsässer Kältetechnik</p>
              <div class="adress-subtitle">Königsallee 1440212  <br></br> Düsseldorf</div>
            </li>
            <li class="footer-item">
              <p class="adress-title">Kontakt</p>
              <span class="adress-subtitle">Telefon:</span>
              <a class=" tel" href="tel:+49 (0) 211 9232 3052">+49 (0) 211 9232 3052</a>
              <br></br>
              <span class="adress-subtitle">E-Mail:</span>
              <a className="mail" href="mailto:info@elsasser-technik.de">info@elsasser-technik.de</a>
            </li>
            <li class="footer-item">
              <p class="adress-title">Shortlinks</p>
              <ul class="shortlinks">
                <li><a href="/kontakt">Kontakt</a></li>
                <li><a href="/rückruf vereinbarenkontakt">Rückruf vereinbaren</a></li>
                <li><a href="/impressum">Impressum</a></li>
                <li><a href="/datenschutz">Datenschutz</a></li>
              </ul>
            </li>
          </ul>
        </adress>
      </footer>
    </body>
  )
}

export default App;
