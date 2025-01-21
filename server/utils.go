package main

import (
	"encoding/json"
	"os"
	"sync"
)

var (
	storageFile = "gallery.json"
	mutex       sync.Mutex
)

func loadImages() (map[string][]Image, error) {
	mutex.Lock()
	defer mutex.Unlock()

	file, err := os.Open(storageFile)
	if err != nil {
		if os.IsNotExist(err) {
			return make(map[string][]Image), nil
		}
		return nil, err
	}
	defer file.Close()

	var images map[string][]Image
	json.NewDecoder(file).Decode(&images)
	return images, nil
}

func saveImages(images map[string][]Image) error {
	mutex.Lock()
	defer mutex.Unlock()

	file, err := os.Create(storageFile)
	if err != nil {
		return err
	}
	defer file.Close()

	return json.NewEncoder(file).Encode(images)
}
