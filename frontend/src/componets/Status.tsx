const Status = () => {
  return (
    <div className="w-full h-28  p-3 flex gap-4  ">
      <div className="flex h-full  flex-col items-center justify-center">
        <div className="h-14 w-14 rounded-full border-2 border-red-500 flex items-center justify-center">
          <img
            className="rounded-full w-12 h-12 object-fill bg-center"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <p className="text-sm">test</p>
      </div>
    </div>
  );
};

export default Status;
