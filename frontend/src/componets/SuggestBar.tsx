const SuggestBar = () => {
  return (
    <div className="w-3/12 py-6 px-2  h-full ">
      <div className="justify-between flex items-center">
        <div className="flex w-full gap-2 items-center">
          <div className="h-14 w-14 rounded-full flex items-center justify-center">
            <img
              className="rounded-full w-12 h-12 bg-cover"
              src="https://images.unsplash.com/photo-1542093978-f89a1a42f876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-lg">aditya dhutraj</h1>
            <p className="text-xs">bloger</p>
          </div>
        </div>
        <div className="text-sky-400">switch</div>
      </div>
      <div>
        <div className="flex ml-2 justify-between items-center">
          <h1 className="text-xl text-gray-400">suggestion for You</h1>
          <h1 className="text-md text-gray-800">See All</h1>
        </div>
        <div className="mt-4 flex justify-between flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex ml-2 items-center gap-2">
              <img
                className="rounded-full w-8 h-8 bg-cover"
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex justify-between flex-col">
                <h1 className="text-md text-gray-600">Abhay karapay</h1>
                <h1 className="text-sm text-gray-400">New to Instagram</h1>
              </div>
            </div>
            <div>
              <h1 className="text-md text-sky-400">Follow</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex ml-2 items-center gap-2">
              <img
                className="rounded-full w-8 h-8 bg-cover"
                src="https://images.unsplash.com/photo-1587397845856-e6cf49176c70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex justify-between flex-col">
                <h1 className="text-md text-gray-600">carryminati</h1>
                <h1 className="text-sm text-gray-400">New to Instagram</h1>
              </div>
            </div>
            <div>
              <h1 className="text-md text-sky-400">Follow</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex ml-2 items-center gap-2">
              <img
                className="rounded-full w-8 h-8 bg-cover"
                src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex justify-between flex-col">
                <h1 className="text-md text-gray-600">bablu bhai</h1>
                <h1 className="text-sm text-gray-400">New to Instagram</h1>
              </div>
            </div>
            <div>
              <h1 className="text-md text-sky-400">Follow</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex ml-2 items-center gap-2">
              <img
                className="rounded-full w-8 h-8 bg-cover"
                src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex justify-between flex-col">
                <h1 className="text-md text-gray-600">Dinesh</h1>
                <h1 className="text-sm text-gray-400">Follwd by Mohan</h1>
              </div>
            </div>
            <div>
              <h1 className="text-md text-sky-400">Follow</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex ml-2 items-center gap-2">
              <img
                className="rounded-full w-8 h-8 bg-cover"
                src="https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex justify-between flex-col">
                <h1 className="text-md text-gray-600">karatik</h1>
                <h1 className="text-sm text-gray-400">Followd by abhya</h1>
              </div>
            </div>
            <div>
              <h1 className="text-md text-sky-400">Follow</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestBar;
