import React from "react";
import { useSelector } from "react-redux";
import {
  StyledListItem,
  StyledListItemUsername,
  StyledListItemEmail,
  StyledEmptyList,
  StyledListContainer,
  StyledHeader,
} from "./PagesStyled.styled.tsx";

// Interface for user data
interface User {
  username: string;
  email: string;
}

// Interface for state
interface State {
  user: {
    users: User[];
  };
}
const DashboardPage = () => {
  const { users } = useSelector((state: State) => state.user);

  return (
    <div>
      <StyledHeader>dashboard</StyledHeader>
      <StyledListContainer>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <StyledListItem key={user.username}>
                <StyledListItemUsername>
                  نام کاربری: {user.username}
                </StyledListItemUsername>
                <StyledListItemEmail>ایمیل: {user.email}</StyledListItemEmail>
              </StyledListItem>
            ))}
          </ul>
        ) : (
          <StyledEmptyList>آیتمی به لیست وارد نشده است</StyledEmptyList>
        )}
      </StyledListContainer>
    </div>
  );
};

export default DashboardPage;
