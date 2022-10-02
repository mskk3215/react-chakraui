import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    //findでuserの中から見つからない時がありその場合undefinedになる
    const targetUser = users.find((user) => user.id === id);

    // setSelectedUser(targetUser ?? null);でも良い
    //!をつけてundefinedの可能性を排除するという記述方法
    setSelectedUser(targetUser!);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
