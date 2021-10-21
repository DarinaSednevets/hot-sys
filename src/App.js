import { React } from 'react';
import './App.scss';



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


            <li className="item"><p>Für Außentemperaturen bis +55°C</p></li>
            <li className="item"><p>Für Außen- und Innenaufstellung erhältlich</p></li>
            <li className="item"><p>Betriebsbereit bei Anlieferung</p></li>
            <li className="item"><p>Automatische Freikühlschaltung für verringerten Energieverbrauch</p></li>
            <li className="item"><p>Robustes Gehäuse für Außenaufstellung</p></li>
            <li className="item"><p>Geringe Schallemissionen</p></li>
            <li className="item"><p>Wetterfest und Langlebig</p></li>
            <li className="item"><p>Erhöhte Betriebssicherheit</p></li>
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
