SAMPLE_DIRS := $(sort $(wildcard samples/*))

all: $(SAMPLE_DIRS) index

$(SAMPLE_DIRS):
	haxe $@/build.hxml --cwd $@

index:
	cat templates/header.html > index.html
	for D in $(SAMPLE_DIRS); do \
		NAME=$$(basename $$D); \
		sed -e "s/NAME/$$NAME/g" templates/item.html >> index.html; \
	done
	cat templates/footer.html >> index.html

.PHONY: all $(SAMPLE_DIRS)
