import { ThemedText } from "@/components/themed-text";
import { Fonts } from "@/constants/theme";

export default function NotesScreen () {
	return (
		<>
			<ThemedText
				type="defaultSemiBold"
				style={{
					fontFamily: Fonts.sans,
				}}>
				Notes
			</ThemedText>
			<textarea></textarea>
		</>
	);
}