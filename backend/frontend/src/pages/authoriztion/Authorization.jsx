import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Button, H2, AuthFormError } from "../../components";
import { useResetForm } from "../../hooks";
import { Link } from "react-router-dom";
import { setUser } from "../../action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { Navigate } from "react-router-dom";
import { ROLE } from "../../constants";
import { request } from "../../utils/request";

const AuthorizationSchema = yup.object().shape({
    login: yup
        .string()
        .required("Заполните логин...")
        .matches(/\w+$/, "Неверный логин. Допускается буквы и цифры")
        .min(3, "Неверно заполнен логин. Минимум 3 символа")
        .max(15, "Неверно заполнен логин. Максимум 15 символов"),
    password: yup
        .string()
        .required("Заполните пароль...")
        .matches(
            /[\w#%]/,
            "Неверно заполнен пароль. Допускаются буквы, цифры и значки #%",
        )
        .min(6, "Неверно заполнен пароль. Минимум 6 символов")
        .max(30, "Неверно заполнен пароль. Максимум 30 символов"),
});

const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: underline;
    margin: 20px 0;
    font-size: 18px;
`;

const AuthorizationContainer = ({ className }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
            password: "",
        },
        resolver: yupResolver(AuthorizationSchema),
    });

    const [serverError, setServerError] = useState();
    const dispatch = useDispatch();

    const roleId = useSelector(selectUserRole)


    useResetForm(reset)

    const onSubmit = ({ login, password }) => {
        request("/login", "POST", { login, password }).then(({ user, error }) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`);
                return;
            }
            dispatch(setUser(user));
            sessionStorage.setItem('userData', JSON.stringify(user))
        });
    };
    const formError = errors?.login?.message || errors?.password?.message;
    const errorMessage = formError || serverError;

    if (roleId !== ROLE.GUEST) {
        return <Navigate to="/" />
    }

    return (
        <div className={className}>
            <H2>Авторизация</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="Логин..."
                    {...register("login", {
                        onChange: () => setServerError(null),
                    })}
                />
                <Input
                    type="password"
                    placeholder="Пароль..."
                    {...register("password", {
                        onChange: () => setServerError(null),
                    })}
                />

                <Button type="submit" disabled={!!formError}>
                    Авторизоваться
                </Button>

                {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}

                <StyledLink to="/register">Регистрация</StyledLink>
            </form>
        </div>
    );
};

export const Authorization = styled(AuthorizationContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
