import Header from './Header';
import CreateProduct from './CreateProduct';
import Footer from './Footer';
import Table from './Table';

function ParentComponent() {
  return (
    <div className="container-main">
      <Header />
      <CreateProduct />
      <Table />
      <Footer />
    </div>
  );
}

export default ParentComponent;
