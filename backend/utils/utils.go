package utils

import (
	"log"
	"time"
)

// LogError is a utility function for logging errors with additional context
func LogError(err error, context string) {
	if err != nil {
		log.Printf("Error in %s: %v", context, err)
	}
}

// FormatDate formats a time.Time object into a string with a specific layout
func FormatDate(t time.Time, layout string) string {
	return t.Format(layout)
}

// Example function for generating a unique identifier or token (if needed)
func GenerateUUID() string {
	// This is just a placeholder. Use a proper UUID library for generating UUIDs.
	return "generated-uuid"
}
