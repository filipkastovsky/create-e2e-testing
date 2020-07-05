#!/usr/bin/env node
import { command } from 'yargs';
import { builder, handleCreate } from '../create-e2e-testing';

command(
    '* [<path>] [<template>]',
    'Invalid <path> or <template>',
    builder as any,
    handleCreate
).parse();
