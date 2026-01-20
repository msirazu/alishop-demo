const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-5">
            <section className="col-span-2 border border-gray-200">
                <h5 className="uppercase font-bold text-xl">category</h5>
            </section>
            <section className="col-span-10 border border-gray-200">
                <div>
                    <h5 className="uppercase font-bold text-xl text-center">products list</h5>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-2 py-2">
                    <div className="border border-gray-200">1</div>
                    <div className="border border-gray-200">1</div>
                    <div className="border border-gray-200">1</div>
                    <div className="border border-gray-200">1</div>
                </div>
            </section>
        </div>
    );
};

export default Home;