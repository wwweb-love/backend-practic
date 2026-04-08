import styled from "styled-components";
import { H2, Content } from "../../components";
import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import { ROLE } from "../../constants";
import { request } from "../../utils/request";

const UsersContainer = ({ className }) => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
    const reqeustServer = useServerRequest();
    useEffect(() => {
        Promise.all([
            request("/users"),
            request("/users/roles"),
        ]).then(([usersRes, rolesRes]) => {
            if (usersRes.error || rolesRes.error) {
                setErrorMessage(usersRes.error || rolesRes.error);
                return;
            }
            setUsers(usersRes.data);
            setRoles(rolesRes.data);
        });
    }, [shouldUpdateUserList]);

    const onUserRemove = (userId) =>
        request(`/users/${userId}`, "DELETE").then(() =>
            setShouldUpdateUserList(!shouldUpdateUserList),
        );

    return (
        <div className={className}>
            <Content error={errorMessage}>
                <H2>Пользователи</H2>

                <div>
                    <TableRow>
                        <div className="login-column">Логин</div>
                        <div className="regitrd-at-column">
                            Дата регистрации
                        </div>
                        <div className="role-column">Роль</div>
                    </TableRow>

                    {users.map(({ id, login, registedAt, roleId }) => (
                        <UserRow
                            id={id}
                            key={id}
                            login={login}
                            registedAt={registedAt}
                            roleId={roleId}
                            roles={roles.filter(
                                ({ id: roleId }) => roleId != ROLE.GUEST,
                            )}
                            onUserRemove={() => onUserRemove(id)}
                        />
                    ))}
                </div>
            </Content>
        </div>
    );
};

export const Users = styled(UsersContainer)`
    width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
`;
