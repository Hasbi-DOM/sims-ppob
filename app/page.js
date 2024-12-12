import Image from "next/image";
import TextInput from "../component/TextInput";
export default function Login() {
	return (
	<div>
		<div className="flex flex-row items-center gap-2">
			<Image src='/Logo.png' alt="logo" width="24" height="24"/>
			<p>SIMS PPOB</p>	
		</div>
		<p className="text-xl">Lengkapi data untuk membuat akun</p>
		<TextInput/>
	</div>
	);
}
