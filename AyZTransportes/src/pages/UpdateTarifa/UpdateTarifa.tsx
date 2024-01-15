import { AuthProvider } from "./Auth/AuthProvider";

import UpdateTarifaPage from "./UpdateTarifaPage";

export function UpdateTarifa() {
  return (
    <>
      <AuthProvider>
        <UpdateTarifaPage />
      </AuthProvider>
    </>
  );
}

export default UpdateTarifa;
