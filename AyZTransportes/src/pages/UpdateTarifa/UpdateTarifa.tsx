import { AuthProvider } from "./Auth/AuthProvider";

import TestComponent from "./TestComponent";
import UpdateTarifaPage from "./UpdateTarifaPage";

function UpdateTarifa() {
  return (
    <>
      <AuthProvider>
        <UpdateTarifaPage />
        <TestComponent />
      </AuthProvider>
    </>
  );
}

export default UpdateTarifa;
