import { React } from 'react';
import './App.scss';


const App = () => {

  return (
    <body>
      <header class="header">

        <nav class="  navbar navbar-expand-md navbar-light  ">
          <div class="container-fluid">

            <a class="navbar-brand" href="/index.html">logo</a>

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
        <h1 class="h1">
          Luftkondensierte<br />
          Kältemaschinen<br />
          & Kaltwassersätze<br />
        </h1>
        <div className="decoration-line"></div>
        <div class="presentation-img-1"></div>
        <p className="text">Aufgrund der kompakten Bauart
          werden platzsparende luftkondensierte Kompressionskältemaschinen
          (umgangsspr. „Kaltwassersätze“)
          vielseitig zur Prozesskühlung und Gebäudeklimatisierung eingesetzt.
        </p>
        <div class="presentation-img-2"></div>
      </section>

      <section className="energy-efficiency">
        <h2 className="h2">ENERGIEEFFIZIENZ IM <br className="br"></br>FOKUS</h2>
        <p>
          Bei der Anschaffung sollte deshalb besonders auf <span>energieeffiziente Systeme</span> geachtet werden, denn die Betriebskosten der Anlage überschreiten erfahrungsgemäß über die Lebensdauer hinweg die einmaligen
          Anschaffungskosten um ein vielfaches.
          Insofern sind die Themen Kompressortechnik und Einsatz von Freikühlung von besonderer Bedeutung, sowie Steuer- und Regelungstechnik besonders wichtig.
        </p>

      </section>

      <section className="standards">
        <div class="standards-img-1"></div>
        <div className="standards-div">
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
      </section>

      <section className="speciality">
        <h2>Unsere Spezialität besteht aus unseren Kaltwassersätzen mit integrierter Freikühleinheit.</h2>
        <p>Doppelkanal Mikrochannel Wärmetauscher kühlen das Prozesswasser energiesparend über ambiente Umgebungsluft.
          <br></br>
          <br></br>
          <span>Nur bei heißen Außentemperaturen erfolgt die Umschaltung auf Kompressionskälteerzeugung.
            Diese Maximierung der Freikühlzeit erzielt größtmögliche Kosteneinsparungen</span> auch bei kleinen Nennleistungen.</p>

      </section>

      <section className="advantages">
        <h2 className="h2">IHRE VORTEILE</h2>
        <ul className="advantages-list list" >
          <li className="item">Geringe Stellfläche</li>
          <li className="item">Mit und ohne integrierter Freikühlung</li>
          <li className="item">Für Außentemperaturen bis +55°C</li>
          <li className="item">Für Außen- und Innenaufstellung erhältlich</li>
          <li className="item">Betriebsbereit bei Anlieferung</li>
          <li className="item">Automatische Freikühlschaltung für verringerten Energieverbrauch</li>
          <li className="item">Robustes Gehäuse für Außenaufstellung</li>
          <li className="item">Geringe Schallemissionen</li>
          <li className="item">Wetterfest und Langlebig</li>
          <li className="item">Erhöhte Betriebssicherheit</li>
        </ul>

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
        <div class="photos-img-1"></div>
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

      <sectiion class="apointment">
        <h2>Jetzt Termin vereinbaren!</h2>
        <p>Gerne stehen wir Ihnen für eine individuelle Beratung telefonisch
          und vor Ort zur
          Verfügung und freuen
          uns über Ihre Kontaktaufnahme. Sprechen Sie uns an!
          Fragen Sie nach einem Rückruf oder kontaktieren Sie uns unter: info@elsasser-technik.de
        </p>
        <h2>Kontakt</h2>
      </sectiion>

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
              <a class=" mail" href="mailto:info@elsasser-technik.de">info@elsasser-technik.de</a>
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
