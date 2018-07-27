RUST_SGX_LIBS = sgx_types\
				sgx_tcrypto \
				sgx_tdh \
				sgx_tkey_exchange\
				sgx_trts \
				sgx_tse \
				sgx_tseal \
				sgx_tservice \
				sgx_tstd \
                sgx_alloc \
                sgx_rand \
                sgx_rand_derive \
                sgx_serialize \
                sgx_serialize_derive \
                sgx_serialize_derive_internals \
                sgx_tprotected_fs \
                sgx_urts \
                sgx_tunittest \
                build_helper


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
	@echo "Done!"

$(RUST_SGX_LIBS):
	cd .. && cd $@ && cargo doc --release && mv target/doc ../doc_site/$@
	find ../doc_site/$@ -iname '*.html' | xargs $(SED) -e "s/$(WORKING_PATH)/../g"

.PHONY: clean
clean:
	rm -rf $(RUST_SGX_LIBS)
	cd .. && rm -rf $(RUST_SGX_LIBS:=/target/doc)
