import { useSelector } from "react-redux";

const Shimmer = ({ flag }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`w-full ${isMenuOpen ? "md:ml-[83px]" : ""}`}>
      {flag ? (
        <div className="flex flex-col lg:flex-row w-full px-2 md:px-0">
          <div className="w-full lg:w-[68%] lg:pr-4">
            <div className="aspect-video w-full rounded-xl bg-gray-200 animate-pulse"></div>
            <div className="mt-4 w-full h-32 rounded-xl bg-gray-200 animate-pulse"></div>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:w-[32%] gap-4 mt-0">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-[168px] h-[94px] rounded-xl bg-gray-200 animate-pulse flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-4 w-full rounded bg-gray-200 animate-pulse mb-2"></div>
                  <div className="h-3 w-3/4 rounded bg-gray-200 animate-pulse mb-1"></div>
                  <div className="h-3 w-1/2 rounded bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden mt-4 grid grid-cols-1 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-[45%] aspect-video rounded-xl bg-gray-200 animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-4 w-full rounded bg-gray-200 animate-pulse mb-2"></div>
                  <div className="h-3 w-3/4 rounded bg-gray-200 animate-pulse mb-1"></div>
                  <div className="h-3 w-1/2 rounded bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-2 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-full">
                <div className="aspect-video w-full rounded-xl bg-gray-200 animate-pulse"></div>
                <div className="mt-3 flex gap-2">
                  <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-4 w-full rounded bg-gray-200 animate-pulse mb-2"></div>
                    <div className="h-3 w-3/4 rounded bg-gray-200 animate-pulse mb-1"></div>
                    <div className="h-3 w-1/2 rounded bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shimmer;
