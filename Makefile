RUST_SGX_LIBS = sgx_types\
				sgx_tcrypto \
				sgx_tdh \
				sgx_tkey_exchange\
				sgx_trts \
				sgx_tse \
				sgx_tseal \
				sgx_tservice \
				sgx_tstdc

UNAME = $(shell uname)

ifeq ($(UNAME), Darwin)
WORKING_PATH = \/Users\/ding\/sgx\/baidu\/x-lab\/sgx
SED = sed -i ''
endif

ifeq ($(UNAME), Linux)
WORKING_PATH = \/home\/ding\/sgx\/baidu\/x-lab\/sgx
SED = sed -i
endif

all: $(RUST_SGX_LIBS)
	find . -iname '*.html' | xargs $(SED) -e "s/$(WORKING_PATH)/../g"
	@echo "Done!"

$(RUST_SGX_LIBS):
	cd .. && cd $@ && cargo doc --release && mv target/doc ../doc_site/$@

.PHONY: clean
clean:
	rm -rf $(RUST_SGX_LIBS)
	cd .. && rm -rf $(RUST_SGX_LIBS:=/target/doc)
