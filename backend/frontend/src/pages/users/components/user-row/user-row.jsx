import styled from "styled-components";
import { Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { TableRow } from "../table-row/table-row";
import { useState } from "react";
import { useServerRequest } from "../../../../hooks";



const userRowContainer = ({
    className,
    id,
    login,
    registedAt,
    roleId: userRoleId,
    roles,
    onUserRemove
}) => {
    const reqeustServer = useServerRequest()

    const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
    const [initialRoleId, setInitialRoleId] = useState(userRoleId)

    const onRoleChange = ({ target }) => {
        setSelectedRoleId(Number(target.value));

    };

    const isSaveButton = selectedRoleId === initialRoleId;

    const onRoleSave = (userId, newUserRoleId) => {
        reqeustServer("updateUserRole", userId, newUserRoleId)

        setInitialRoleId(newUserRoleId)
    }

    return (
        <div className={className}>
            <TableRow border={true}>
                <div className="login-column">{login}</div>
                <div className="regitrd-at-column">{registedAt}</div>
                <div className="role-column">
                    <select
                        value={selectedRoleId}
                        onChange={onRoleChange}
                    >
                        {roles.map(({ id: roleId, name: roleName }) => (
                            <option key={roleId} value={roleId}>
                                {roleName}
                            </option>
                        ))}
                    </select>
                    <div className="save-role-button">
                        <Icon
                            disabled={isSaveButton}
                            id="fa-floppy-o"
                            margin="0 0 0 10px"
                            onClick={() => onRoleSave(id, selectedRoleId)}
                        ></Icon>
                    </div>
                </div>
            </TableRow>
            <Icon id="fa-trash-o" onClick={onUserRemove} ></Icon>
        </div>
    );
};

export const UserRow = styled(userRowContainer)`
    display: flex;
    margin-top: 10px;

    & select {
        font-size: 16px;
        padding: 0 5px;
    }

    & .save-role-button {
        width: 21px;
        height: 32px;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
