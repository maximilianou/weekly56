#!/usr/bin/env zx
$.prefix += 'export NVM_DIR=$HOME/.nvm; source $NVM_DIR/nvm.sh; ';
await $`nvm --version` ;
await $`node --version` ;
await $`npm --version` ;

