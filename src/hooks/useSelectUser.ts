import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  //selectされたユーザーの状態を持っておきたいのでuseStateを使う
  // 初期値は未選択なのでnull。そのため、型はUser | nullになる。
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // クリックされた時にユーザーを特定する関数
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    //findは配列の中から最初に一致する要素を返す
    //findでuserの中から見つからない時がありその場合undefinedになる
    const targetUser = users.find((user) => user.id === id);

    // setSelectedUser(targetUser ?? null);でも良い
    //!をつけてundefinedの可能性を排除するという記述方法。typescriptの記述無視なので絶対ある時のみ使用
    setSelectedUser(targetUser!);
    //modalを開く
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
