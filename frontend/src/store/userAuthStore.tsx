import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const userAuthStore = create((set, get) => ({
  authUser: null,
  isSignUp: false,
  isLogin: false,
  isUpdatingProfile: false,
  isCheckingAuth: false,
  isRegister: false,
  AllUserList: [],
  friend_list: [],
  loading: false,

  CheckAuth: async () => {
    set({ isCheckingAuth: true, authUser: null });
    try {
      const res = await axiosInstance.get("auth/checkAuth");
      console.log("res", res.data.data);
      set({ isCheckingAuth: false, authUser: res.data.data });
      get().getUserList();
    } catch (error) {
      console.log("check auth error ", error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  Login: async (Credential) => {
    set({ isLogin: true, authUser: null });
    try {
      const res = await axiosInstance.post("auth/login", Credential);
      toast.success("user login successfully");
      set({ authUser: res.data.data });
      return true;
    } catch (error) {
      toast.error("error" + error);
      console.log(error);
      return false;
    } finally {
      set({ isLogin: false });
    }
  },

  Register: async (Credential) => {
    try {
      set({ isRegister: true });
      const res = await axiosInstance.post("auth/register", Credential);
      toast.success("user register succefull");
      return true;
    } catch (error) {
      toast.error("error=>" + error);
      return false;
    } finally {
      set({
        isRegister: false,
      });
    }
  },

  getUserList: async () => {
    try {
      set({ AllUserList: [], loading: true, friend_list: [] });
      const res = await axiosInstance.get("auth/getuserlist");
      console.log("reast", res);

      const authuser = get().authUser;
      const user_list = res.data.data.filter(
        (item) => item._id !== authuser._id
      );
      console.log("auth user ", user_list, "user->", authuser);
      set({ AllUserList: user_list, friend_list: authuser.friendlist });
    } catch (error) {
      console.log("error", error);
    } finally {
      set({ loading: false });
    }
  },

  addfriend: async (friend_id) => {
    try {
      const user = get().authUser;
      const Credential = {
        friend_id,
        _id: user._id,
      };
      const res =await axiosInstance.post("/auth/addfriend", Credential);
      if (res) {
        toast.success("request sent ");
      }
      await get().CheckAuth();
    } catch (error) {
      toast.error("server not respond" + error);
    }
  },
  acceptFriendRequest: async (friend_id) => {
    try {
      const user = get().authUser;
      const Credential = {
        friend_id,
        _id: user._id,
      };
      const res =await axiosInstance.post("/auth/acceptrequest", Credential);
      if (res) {
        toast.success("request accepted");
      }
      await get().CheckAuth();
    } catch (error) {
      toast.error("server not respond" + error);
    }
  },
}));
