const Shimmer = ({ flag }) => {
  return (
    <div className="w-full">
      {flag && (
        <div className="flex flex-row justify-between w-full">
          <div className="w-[680px] flex-shrink-0">
            {" "}
            <div className="mt-2 w-full h-[380px] rounded-[10px] bg-gray-200"></div>
            <div className="mt-2 w-full h-[180px] rounded-[10px] bg-gray-200"></div>
          </div>

          <div className="ml-6 flex-grow overflow-y-auto">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="flex mb-3">
                {" "}
                <div className="p-2 w-[180px] flex flex-col h-[100px] rounded-xl relative overflow-hidden bg-gray-200"></div>
                <div className="mt-3 ml-1.5 w-[250px] flex justify-between">
                  <div className="w-[40px] h-[40px] rounded-full bg-gray-200"></div>
                  <div className="text-[14px] w-[200px] text-left">
                    <p className="text-[14px] font-medium w-11/12 bg-gray-200 h-2 mb-1.5"></p>
                    <p className="font-medium bg-gray-200 h-2 w-[90px] mb-1.5"></p>
                    <div className="flex items-center gap-1 mt-1 mb-1.5">
                      <span className="font-medium bg-gray-200 h-2 w-[90px]"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!flag && (
        <div className=" p-1 flex  flex-wrap gap-6">
          {[...Array(16)].map((_, i) => (
            <div>
              <div
                key={i}
                className="shimmer-card p-2 w-[270px] flex flex-col h-[155px] rounded-xl 
                      relative overflow-hidden bg-gray-200"
              ></div>
              <div className="mt-3 w-[270px] flex justify-between">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-200 "></div>
                <div className="text-[14px] w-[200px] text-left">
                  <p className="text-[14px] font-medium w-11/12 bg-gray-200 h-2 mb-1.5"></p>
                  <p className="font-medium bg-gray-200 h-2 w-[90px] mb-1.5"></p>
                  <div className="flex items-center gap-1 mt-1 mb-1.5">
                    <span className="font-medium bg-gray-200 h-2 w-[90px]"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shimmer;
