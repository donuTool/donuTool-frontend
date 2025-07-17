export async function fetchUser(googleId: string) {
  try {
    const res = await fetch(`http://localhost:3001/api/user/${googleId}`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }
    const user = await res.json();

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
