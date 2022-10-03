import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

//カスタムフックによりuseContextでContextを指定するということは必要なくなる
//useLoginUserを呼ぶだけでContextの値を参照できるようになる
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
