all: liability.pdf composite.pdf

clean:
	rm liability.pdf composite.pdf

composite.pdf: liability.pdf health_form.pdf media_release.pdf
	pdftk liability.pdf health_form.pdf media_release.pdf cat output composite.pdf

liability.pdf: session_dates.txt
	$(eval TMP:=$(shell mktemp -u))
	# Get the contents of session_dates.txt and remove the newline at the end
	$(eval DATES:=$(shell head -c -1 session_dates.txt))

	# Replace DATES in liability_template.fodt with the contents of
	# session_dates.txt and save it in the temp file we just made
	sed "s/DATES/$(DATES)/g" liability_template.fodt > "$(TMP).fodt"

	# Convert that temp file to a PDF, save as liability.pdf, then delete the
	# temp file
	soffice --convert-to pdf "$(TMP).fodt" --headless
	mv "$(shell basename $(TMP)).pdf" liability.pdf
	rm "$(TMP).fodt"
