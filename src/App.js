//lib
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Fragment } from 'react';

//src
import { DefaultLayout } from './layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        let Layout = DefaultLayout;
                        if (publicRoute.layout) {
                            Layout = publicRoute.layout;
                        } else if(publicRoute.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = publicRoute.component;
                        return (
                            <Route
                                key={index}
                                path={publicRoute.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
