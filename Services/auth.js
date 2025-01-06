import { supabase } from "./supabaseClient";

// Función para iniciar sesión
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error al iniciar sesión:", error.message);
    return { success: false, message: error.message };
  }

  return { success: true, data };
};

// Función para registrarse (opcional, si deseas agregarla más tarde)
export const register = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Error al registrarse:", error.message);
    return { success: false, message: error.message };
  }

  return { success: true, data };
};

// Función para cerrar sesión
export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error al cerrar sesión:", error.message);
    return { success: false, message: error.message };
  }

  return { success: true };
};
