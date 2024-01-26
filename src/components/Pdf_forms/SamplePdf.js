import { PDFDocument } from 'pdf-lib';

const SamplePdf = () => {
	const fillForm = async () => {
		// Step 1: Load the PDF form.
		const formUrl = 'https://pdf-lib.js.org/assets/dod_character.pdf';
		const formPdfBytes = await fetch(formUrl).then((res) =>
			res.arrayBuffer(),
		);
		const pdfDoc = await PDFDocument.load(formPdfBytes);

		// Step 2: Retrieve the form fields.
		const form = pdfDoc.getForm();
		const nameField = form.getTextField('CharacterName 2');
		const ageField = form.getTextField('Age');
		const heightField = form.getTextField('Height');
		const weightField = form.getTextField('Weight');
		const eyesField = form.getTextField('Eyes');
		const skinField = form.getTextField('Skin');
		const hairField = form.getTextField('Hair');

		// Step 3: Set values for the form fields.
		nameField.setText('Mario');
		ageField.setText('24 years');
		heightField.setText(`5' 1"`);
		weightField.setText('196 lbs');
		eyesField.setText('blue');
		skinField.setText('white');
		hairField.setText('brown');

		// Step 4: Save the modified PDF.
		const pdfBytes = await pdfDoc.save();

		// Step 5: Create a `Blob` from the PDF bytes,
		const blob = new Blob([pdfBytes], { type: 'application/pdf' });

		// Step 6: Create a download URL for the `Blob`.
		const url = URL.createObjectURL(blob);

		// Step 7: Create a link element and simulate a click event to trigger the download.
		const link = document.createElement('a');
		link.href = url;
		link.download = 'filled_form.pdf';
		link.click();
	};

	return (
		<div>
			<h1>PDF Form Filler</h1>
			<button onClick={fillForm}>Fill Form</button>
		</div>
	);
};

export default SamplePdf;