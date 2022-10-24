import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function App() {
  return (
    <div>
      <Navbar
        className="ms-4"
        style={{ backgroundColor: "#24b98e", margin: "20px" }}
      >
        <Nav className="ms-4">
          <Nav.Link href="#home" style={{ color: "#ffffff" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" style={{ color: "#ffffff" }}>
            About
          </Nav.Link>
          <Nav.Link href="#contact" style={{ color: "#ffffff" }}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
      <div
        className="ms-4"
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          margin: "20px 20px 20px 20px",
        }}
      >
        <h1>Home</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          necessitatibus consequuntur, tempora aut sint quas nam! Consequuntur
          modi molestias qui architecto earum neque deserunt ipsum harum sed
          blanditiis, ut, ducimus, quis soluta quidem? Cum quisquam illum
          quaerat sed vero. Ut sint provident nisi voluptate maxime eum illum
          doloribus pariatur porro fugiat facilis ipsam temporibus alias est
          cumque corrupti aut possimus ad debitis nam, ex velit. A similique vel
          eligendi voluptatem nobis? Sunt inventore optio maiores tenetur
          aliquam eius facilis aperiam a laudantium impedit quaerat est
          necessitatibus quam, nulla ipsa qui, enim hic quisquam dicta accusamus
          exercitationem voluptatum repellat perspiciatis. Numquam?
        </p>
      </div>
    </div>
  );
}

export default App;
