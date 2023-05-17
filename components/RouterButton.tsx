import { useRouter } from "next/router";

export const RouterButton = () => {
    const router = useRouter();
    return (
        <>
         <button onClick={() => router.back()}>Back</button>
         <> </>
         <button onClick={() => router.push('/')}>Home</button>
        </>
    )
}