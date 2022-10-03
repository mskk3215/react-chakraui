import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

export type LoginUserContextType = {
  //初期値のnullとUser
  loginUser: User | null;
  //loginUserを更新していけるようにしたいのでsetLoginUserを使う
  //useStateの型は、dispatchとsetStateActionを使う
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};
//createContextを使っていく
//初期値の()はas強制的に認識させてあげる
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

//全てのconponentでcontextの値を参照できるようにProviderで囲ってあげる
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);
  return (
    //loginuserとsetloginuserのどちらかだけをレンダリングする場合は、分けてあげる
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
