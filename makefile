.PHONY: git run 

SERIAL_PORT := /dev/cu.usbserial-10

git:
	git add .
	git commit -m "New commit"
	git push


run:
	@echo "Running with serial port: $(SERIAL_PORT)"
	python run.py --serial-port=$(SERIAL_PORT)


list-ports:
	@echo "Listing available serial ports:"
	@ls /dev/* | grep -E '^/dev/tty\.[A-Za-z0-9]*$$'



sketch:
	/Users/hungwei/Library/Arduino15/packages/esp32/tools/esptool_py/4.5.1/esptool" --chip esp32 --port "/dev/cu.usbserial-1110" --baud 115200  --before default_reset --after hard_reset write_flash  -z --flash_mode dio --flash_freq 80m --flash_size 4MB 0x1000 "/private/var/folders/cq/fm5jpxyd0cdg6lm8wsw93jqr0000gn/T/arduino/sketches/B092E0D10EA42E9E423755C3F7637C6B/main.ino.bootloader.bin" 0x8000 "/private/var/folders/cq/fm5jpxyd0cdg6lm8wsw93jqr0000gn/T/arduino/sketches/B092E0D10EA42E9E423755C3F7637C6B/main.ino.partitions.bin" 0xe000 "/Users/hungwei/Library/Arduino15/packages/esp32/hardware/esp32/2.0.17/tools/partitions/boot_app0.bin" 0x10000 "/private/var/folders/cq/fm5jpxyd0cdg6lm8wsw93jqr0000gn/T/arduino/sketches/B092E0D10EA42E9E423755C3F7637C6B/main.ino.bin
