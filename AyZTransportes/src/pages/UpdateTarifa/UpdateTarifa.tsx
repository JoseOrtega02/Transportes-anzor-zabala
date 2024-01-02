import { AuthProvider } from "./Auth/AuthProvider";

import UpdateTarifaPage from "./UpdateTarifaPage";

function UpdateTarifa() {
  return (
    <>
      <AuthProvider>
        <UpdateTarifaPage />
      </AuthProvider>
    </>
  );
}

export default UpdateTarifa;
