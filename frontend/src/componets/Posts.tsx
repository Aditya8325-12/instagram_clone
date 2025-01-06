const Posts = () => {
  return (
    <div className="w-full p-2 flex justify-center   ">
      <div className="w-9/12   h-full flex flex-col gap-2">
        <div className="w-full flex flex-col ">
          <div className="w-full h-14 flex items-center">
            <img
              className="rounded-full w-8 h-8 bg-cover ml-2"
              src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1 className="ml-4">aditya dhutraj</h1>
          </div>
          <div className="w-full">
            <img
              className="w-full rounded-sm h-96 object-contain"
              src="https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="w-full mt-2">
            <div className="w-full">
              <div className="flex justify-between w-full h-10 items-center">
                <div className="flex gap-4 ml-3">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                  <svg
                    aria-label="Comment"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <svg
                    aria-label="Share Post"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1={22}
                      x2="9.218"
                      y1={3}
                      y2="10.083"
                    />
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="mr-2">
                  <svg
                    aria-label="Save"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="ml-2 mt-3 w-full  text-sm">
              <h1>603 likes</h1>
              <p>View all 13 comments</p>
              <div className="flex mt-1 justify-between">
                <div>computer_science_engineers @this_is_premsagar yes</div>
                <div className="mr-4">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={18}
                    role="img"
                    viewBox="0 0 24 24"
                    width={18}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full hidden sm:flex justify-between h-10 mt-3">
              <div className="pl-2 flex">
                <div className="flex h-10 items-center">
                  <svg
                    aria-label="Emoji"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </div>
                <div className="h-10 flex items-center pl-2">
                  <input
                    className="py-2 outline-none"
                    type="text"
                    placeholder="Add to coments.."
                  />
                </div>
              </div>
              <div className="h-10 flex items-center text-sky-400 mr-3">
                post
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <div className="w-full h-14 flex items-center">
            <img
              className="rounded-full w-8 h-8 bg-cover ml-2"
              src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1 className="ml-4">aditya dhutraj</h1>
          </div>
          <div className="w-full">
            <img
              className="w-full rounded-sm h-96 object-contain"
              src="https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="w-full mt-2">
            <div className="w-full">
              <div className="flex justify-between w-full h-10 items-center">
                <div className="flex gap-4 ml-3">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                  <svg
                    aria-label="Comment"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <svg
                    aria-label="Share Post"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1={22}
                      x2="9.218"
                      y1={3}
                      y2="10.083"
                    />
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="mr-2">
                  <svg
                    aria-label="Save"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="ml-2 mt-3 w-full  text-sm">
              <h1>603 likes</h1>
              <p>View all 13 comments</p>
              <div className="flex mt-1 justify-between">
                <div>computer_science_engineers @this_is_premsagar yes</div>
                <div className="mr-4">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={18}
                    role="img"
                    viewBox="0 0 24 24"
                    width={18}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full hidden sm:flex justify-between h-10 mt-3">
              <div className="pl-2 flex">
                <div className="flex h-10 items-center">
                  <svg
                    aria-label="Emoji"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </div>
                <div className="h-10 flex items-center pl-2">
                  <input
                    className="py-2 outline-none"
                    type="text"
                    placeholder="Add to coments.."
                  />
                </div>
              </div>
              <div className="h-10 flex items-center text-sky-400 mr-3">
                post
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <div className="w-full h-14 flex items-center">
            <img
              className="rounded-full w-8 h-8 bg-cover ml-2"
              src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1 className="ml-4">aditya dhutraj</h1>
          </div>
          <div className="w-full">
            <img
              className="w-full rounded-sm h-96 object-contain"
              src="https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="w-full mt-2">
            <div className="w-full">
              <div className="flex justify-between w-full h-10 items-center">
                <div className="flex gap-4 ml-3">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                  <svg
                    aria-label="Comment"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <svg
                    aria-label="Share Post"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1={22}
                      x2="9.218"
                      y1={3}
                      y2="10.083"
                    />
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="mr-2">
                  <svg
                    aria-label="Save"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="ml-2 mt-3 w-full  text-sm">
              <h1>603 likes</h1>
              <p>View all 13 comments</p>
              <div className="flex mt-1 justify-between">
                <div>computer_science_engineers @this_is_premsagar yes</div>
                <div className="mr-4">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={18}
                    role="img"
                    viewBox="0 0 24 24"
                    width={18}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full hidden sm:flex justify-between h-10 mt-3">
              <div className="pl-2 flex">
                <div className="flex h-10 items-center">
                  <svg
                    aria-label="Emoji"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </div>
                <div className="h-10 flex items-center pl-2">
                  <input
                    className="py-2 outline-none"
                    type="text"
                    placeholder="Add to coments.."
                  />
                </div>
              </div>
              <div className="h-10 flex items-center text-sky-400 mr-3">
                post
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <div className="w-full h-14 flex items-center">
            <img
              className="rounded-full w-8 h-8 bg-cover ml-2"
              src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1 className="ml-4">aditya dhutraj</h1>
          </div>
          <div className="w-full">
            <img
              className="w-full rounded-sm h-96 object-contain"
              src="https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="w-full mt-2">
            <div className="w-full">
              <div className="flex justify-between w-full h-10 items-center">
                <div className="flex gap-4 ml-3">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                  <svg
                    aria-label="Comment"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <svg
                    aria-label="Share Post"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1={22}
                      x2="9.218"
                      y1={3}
                      y2="10.083"
                    />
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="mr-2">
                  <svg
                    aria-label="Save"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="ml-2 mt-3 w-full  text-sm">
              <h1>603 likes</h1>
              <p>View all 13 comments</p>
              <div className="flex mt-1 justify-between">
                <div>computer_science_engineers @this_is_premsagar yes</div>
                <div className="mr-4">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={18}
                    role="img"
                    viewBox="0 0 24 24"
                    width={18}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full hidden sm:flex justify-between h-10 mt-3">
              <div className="pl-2 flex">
                <div className="flex h-10 items-center">
                  <svg
                    aria-label="Emoji"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </div>
                <div className="h-10 flex items-center pl-2">
                  <input
                    className="py-2 outline-none"
                    type="text"
                    placeholder="Add to coments.."
                  />
                </div>
              </div>
              <div className="h-10 flex items-center text-sky-400 mr-3">
                post
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <div className="w-full h-14 flex items-center">
            <img
              className="rounded-full w-8 h-8 bg-cover ml-2"
              src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1 className="ml-4">aditya dhutraj</h1>
          </div>
          <div className="w-full">
            <img
              className="w-full rounded-sm h-96 object-contain"
              src="https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="w-full mt-2">
            <div className="w-full">
              <div className="flex justify-between w-full h-10 items-center">
                <div className="flex gap-4 ml-3">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                  <svg
                    aria-label="Comment"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <svg
                    aria-label="Share Post"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1={22}
                      x2="9.218"
                      y1={3}
                      y2="10.083"
                    />
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="mr-2">
                  <svg
                    aria-label="Save"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="ml-2 mt-3 w-full  text-sm">
              <h1>603 likes</h1>
              <p>View all 13 comments</p>
              <div className="flex mt-1 justify-between">
                <div>computer_science_engineers @this_is_premsagar yes</div>
                <div className="mr-4">
                  <svg
                    aria-label="Like"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={18}
                    role="img"
                    viewBox="0 0 24 24"
                    width={18}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full hidden sm:flex justify-between h-10 mt-3">
              <div className="pl-2 flex">
                <div className="flex h-10 items-center">
                  <svg
                    aria-label="Emoji"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </div>
                <div className="h-10 flex items-center pl-2">
                  <input
                    className="py-2 outline-none"
                    type="text"
                    placeholder="Add to coments.."
                  />
                </div>
              </div>
              <div className="h-10 flex items-center text-sky-400 mr-3">
                post
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
