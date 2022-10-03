import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

//&で型を追加することができる
type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  //初期値のnullとUser
  loginUser: LoginUser | null;
  //loginUserを更新していけるようにしたいのでsetLoginUserを使う
  //useStateの型は、dispatchとsetStateActionを使う
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};
//createContextを使っていく
//初期値の()はas強制的に認識させてあげる
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

//全てのconponentでcontextの値を参照できるようにProviderで囲ってあげる
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    //loginuserとsetloginuserのどちらかだけをレンダリングする場合は、分けてあげる
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
