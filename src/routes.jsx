import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export function Public({ children, ...props }) {
    const isAuth = useSelector(state => state.isAuth);

    if (isAuth) {
        return (
            <Redirect to="/" />
        )
    } else {
        return (
            <Route {...props}>
                {() => children}
            </Route>
        )
    }
}

export function Private({ children, ...props }) {
    const isAuth = useSelector(state => state.isAuth);

    if (!isAuth) {
        return (
            <Redirect to="login" />
        )
    } else {
        return (
            <Route {...props}>
                {() => children}
            </Route>
        )
    }
}