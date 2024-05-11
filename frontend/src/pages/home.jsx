
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import './home.css';

export default function Login() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="p-5 text-center bg-image rounded-3">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
