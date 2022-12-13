const PropertyViewer = () => {
  useEffect(() => {
    getPhotosForProperties();
  }, []);

  async function getPhotosForProperties() {
    const response = await axios.get("http://127.0.0.1:8000/api/properties/");
    setProperties(response.data);
  }
  return <div></div>;
};

export default PropertyViewer;
