const Amenities = () => {
  return (
    <div className="flex flex-col w-full md:w-1/3 gap-y-4 p-4">
      <div className="md:grid md:grid-cols-2 flex flex-col">
        <p>Bed</p>
        <p>Description</p>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col">
        <p>Features</p>
        <div className="grid md:grid-cols-3">
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div>
            <p>4</p>
            <p>5</p>
            <p>6</p>
          </div>
          <div>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
