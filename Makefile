SUBDIRS := $(wildcard samples/*)

all: $(SUBDIRS)

$(SUBDIRS):
	haxe $@/build.hxml --cwd $@

.PHONY: all $(SUBDIRS)
