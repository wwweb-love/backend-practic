import styled from "styled-components";
import { Button, Icon } from "../..";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROLE } from "../../../constants";
import {
    selectUserRole,
    selectUserLogin
} from "../../../selectors";
import { logout } from "../../../action";
import { RESET_POST_DATA } from "../../../action";

const RightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const UserName = styled.div`
    font-size: 18px;
    wont-weight: bold;
    margin: 0 0 10px 0;
`;

const ControlPanelContainer = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);


    const onLogout = () => {
        dispatch(logout())
        sessionStorage.removeItem('userData')
    }

    return (
        <div className={className}>
            <RightAlign>
                {roleId == ROLE.GUEST ? (
                    <Button>
                        <Link to="/login">Войти</Link>
                    </Button>
                ) : (
                    <>
                        <UserName>{login}</UserName>

                        <Icon
                            onClick={onLogout}
                            id="fa-sign-out"
                            margin="0 0 0 10px"
                        />
                    </>
                )}
            </RightAlign>

            <RightAlign>
                    <Icon onClick={() => navigate(-1)} id="fa-backward" margin="10px 0 0 0" />
                <Link to="/post">
                    <Icon id="fa-file-text-o" margin="10px 0 0 16px" />
                </Link>
                <Link to="/users">
                    <Icon id="fa-users" margin="10px 0 0 16px" />
                </Link>
            </RightAlign>
        </div>
    );
};

export const ControlPanel = styled(ControlPanelContainer)``;
