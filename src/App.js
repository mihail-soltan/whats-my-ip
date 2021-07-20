import './styles.css';
import IP from './components/IP'
import 'rsuite/dist/styles/rsuite-default.css'
// import 'leaflet/dist/leaflet.css';
// import 'rsuite/lib/styles/index.less'
import { Container, Content, Navbar, Nav, Header, Icon, Dropdown } from 'rsuite'
function App() {

  return (
    // <div className="App">


    <div className="show-fake-browser navbar-page">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Body>
              <Nav>
                <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
                <Dropdown title="About">
                  <Dropdown.Item>Company</Dropdown.Item>
                  <Dropdown.Item>Team</Dropdown.Item>
                  <Dropdown.Item>Contact</Dropdown.Item>
                </Dropdown>
              </Nav>
              <Nav pullRight>
                <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
              </Nav>
            </Navbar.Body>
          </Navbar>
        </Header>
        <Content>
          <IP />
        </Content>
        
      </Container>
    </div>
    // </div>

  );

}
export default App;
