import Nav from "@/components/Nav";

const RestricedPage1 = () => {
  return (
    <div>
      <Nav />
      <h1 className="text-3xl mb-10"> Page with restricted access</h1>
      <p>
        This is a page with restricted access. You can only access this page if you are authenticated.
      </p>
    </div >
  );
}

export default RestricedPage1;
